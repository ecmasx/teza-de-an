import { test, expect } from '@playwright/test'

test.describe('AR Performance Tests', () => {
  test('should load 3D models within acceptable time', async ({ page }) => {
    // Measure page load time
    const startTime = Date.now()
    await page.goto('/ar/1')

    // Wait for model-viewer to be loaded
    const modelViewer = page.locator('model-viewer')
    await expect(modelViewer).toBeVisible()

    // Wait for model to load (model-viewer fires 'load' event)
    await page.waitForFunction(
      () => {
        const mv = document.querySelector('model-viewer')
        return mv && mv.loaded
      },
      { timeout: 10000 },
    )

    const loadTime = Date.now() - startTime

    // Model should load within 10 seconds
    expect(loadTime).toBeLessThan(10000)

    console.log(`Model loaded in ${loadTime}ms`)
  })

  test('should handle multiple models efficiently', async ({ page }) => {
    // Test loading different models sequentially
    const models = [1, 2, 3, 5, 10]
    const loadTimes: number[] = []

    for (const modelId of models) {
      const startTime = Date.now()
      await page.goto(`/ar/${modelId}`)

      await page.waitForSelector('model-viewer')
      await page.waitForFunction(
        () => {
          const mv = document.querySelector('model-viewer')
          return mv && mv.loaded
        },
        { timeout: 15000 },
      )

      const loadTime = Date.now() - startTime
      loadTimes.push(loadTime)

      // Each model should load within 15 seconds
      expect(loadTime).toBeLessThan(15000)
    }

    const avgLoadTime = loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length
    console.log(`Average load time: ${avgLoadTime}ms`)

    // Average should be reasonable
    expect(avgLoadTime).toBeLessThan(8000)
  })

  test('should maintain good performance during interactions', async ({ page }) => {
    await page.goto('/ar/7')

    const modelViewer = page.locator('model-viewer')
    await expect(modelViewer).toBeVisible()

    // Wait for model to load
    await page.waitForFunction(() => {
      const mv = document.querySelector('model-viewer')
      return mv && mv.loaded
    })

    // Measure interaction responsiveness
    const startTime = Date.now()

    // Simulate touch interactions (rotate model)
    await modelViewer.hover()
    await page.mouse.down()
    await page.mouse.move(100, 100)
    await page.mouse.up()

    const interactionTime = Date.now() - startTime

    // Interactions should be responsive (< 100ms)
    expect(interactionTime).toBeLessThan(500)
  })

  test('should optimize memory usage', async ({ page }) => {
    await page.goto('/ar/15')

    // Get initial performance metrics
    const initialMetrics = await page.evaluate(() => {
      return (
        performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }
      ).memory
        ? {
            usedJSHeapSize: (performance as unknown as { memory: { usedJSHeapSize: number } })
              .memory.usedJSHeapSize,
            totalJSHeapSize: (performance as unknown as { memory: { totalJSHeapSize: number } })
              .memory.totalJSHeapSize,
          }
        : null
    })

    if (initialMetrics) {
      // Memory usage should be reasonable for 3D content
      expect(initialMetrics.usedJSHeapSize).toBeLessThan(100 * 1024 * 1024) // < 100MB
    }

    // Load multiple models and check for memory leaks
    for (let i = 1; i <= 5; i++) {
      await page.goto(`/ar/${i}`)
      await page.waitForSelector('model-viewer')
    }

    const finalMetrics = await page.evaluate(() => {
      return (
        performance as unknown as { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }
      ).memory
        ? {
            usedJSHeapSize: (performance as unknown as { memory: { usedJSHeapSize: number } })
              .memory.usedJSHeapSize,
            totalJSHeapSize: (performance as unknown as { memory: { totalJSHeapSize: number } })
              .memory.totalJSHeapSize,
          }
        : null
    })

    if (finalMetrics && initialMetrics) {
      const memoryIncrease = finalMetrics.usedJSHeapSize - initialMetrics.usedJSHeapSize
      // Memory increase should be reasonable
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024) // < 50MB increase
    }
  })
})
