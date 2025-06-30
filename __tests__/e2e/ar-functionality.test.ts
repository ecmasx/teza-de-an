import { test, expect } from '@playwright/test'

test.describe('AR Functionality E2E Tests', () => {
  test('should navigate to AR viewer from product page', async ({ page }) => {
    await page.goto('/product/1')

    // Check if Try in AR button exists
    const arButton = page.locator('text=Try in AR')
    await expect(arButton).toBeVisible()

    // Click AR button
    await arButton.click()

    // Should navigate to AR page
    await expect(page).toHaveURL('/ar/1')

    // Check if model-viewer is loaded
    const modelViewer = page.locator('model-viewer')
    await expect(modelViewer).toBeVisible()

    // Check if model source is set correctly
    await expect(modelViewer).toHaveAttribute('src', '/modelsglb/1.glb')
    await expect(modelViewer).toHaveAttribute('ios-src', '/modelsusdz/1.usdz')
  })

  test('should load 3D model successfully', async ({ page }) => {
    await page.goto('/ar/5')

    // Wait for model-viewer to load
    const modelViewer = page.locator('model-viewer')
    await expect(modelViewer).toBeVisible()

    // Check AR capabilities
    await expect(modelViewer).toHaveAttribute('ar')
    await expect(modelViewer).toHaveAttribute('camera-controls')
    await expect(modelViewer).toHaveAttribute('touch-action', 'pan-y')
  })

  test('should handle AR on mobile devices', async ({ page, isMobile }) => {
    if (!isMobile) return

    await page.goto('/ar/3')

    const modelViewer = page.locator('model-viewer')
    await expect(modelViewer).toBeVisible()

    // On mobile, AR button should be available
    const arButton = page.locator('[slot="ar-button"]')
    await expect(arButton).toBeVisible()
  })

  test('should display product info on AR page', async ({ page }) => {
    await page.goto('/ar/2')

    // Product name should be displayed
    await expect(page.locator('h1')).toContainText('Fotoliu Scandinav')

    // Price should be displayed
    await expect(page.locator('text=1999 MDL')).toBeVisible()

    // Back button should work
    const backButton = page.locator('text=Back to Product')
    await expect(backButton).toBeVisible()
    await backButton.click()
    await expect(page).toHaveURL('/product/2')
  })
})
