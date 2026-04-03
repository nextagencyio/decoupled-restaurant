import { test, expect } from '@playwright/test'

test.describe('Restaurant starter — non-demo mode', () => {
  test('homepage loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Ember.*Bloom/i)
    // Homepage should have hero section content from Drupal
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('menu page shows menu items from Drupal', async ({ page }) => {
    await page.goto('/menu')
    await expect(page.locator('h1')).toContainText('Menu')
    // Should have at least one menu item card
    const cards = page.locator('a[href^="/menu/"]')
    await expect(cards.first()).toBeVisible()
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('events page shows events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    const cards = page.locator('a[href^="/events/"]')
    await expect(cards.first()).toBeVisible()
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('reviews page shows reviews from Drupal', async ({ page }) => {
    await page.goto('/reviews')
    await expect(page.locator('h1')).toContainText('Reviews')
    const cards = page.locator('a[href^="/reviews/"]')
    await expect(cards.first()).toBeVisible()
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('menu item detail page loads via slug routing', async ({ page }) => {
    await page.goto('/menu/pan-seared-salmon')
    await expect(page.locator('h1')).toContainText('Salmon')
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    // Click menu link in navigation
    await page.click('nav a[href="/menu"]')
    await expect(page).toHaveURL(/\/menu/)
    await expect(page.locator('h1')).toContainText('Menu')
  })
})
