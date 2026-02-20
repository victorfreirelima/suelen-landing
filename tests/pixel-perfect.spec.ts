import { test, expect } from '@playwright/test';

test.describe('Pixel Perfect Visual Regression', () => {
    test('Landing page matches reference layout precisely', async ({ page }) => {
        // Navigate to the test page with the overlay explicitely disabled (?pp=0)
        // to ensure ONLY the actual DOM is screenshotted, not the reference overlay.
        await page.goto('/en?pp=0', { waitUntil: 'networkidle' });

        // Ensure fonts and images are fully loaded
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(2000); // Give smooth animations/load a moment to settle

        // Compare full page screenshot with a specific maxDiffPixels tolerance
        // Note: To capture the scrolling context perfectly against reference, 
        // we take a full page screenshot.
        await expect(page).toHaveScreenshot('landing-page-1440.png', {
            fullPage: true,
            maxDiffPixels: 1500,     // Allow a small threshold initially for font rendering OS differences
            threshold: 0.1           // Sensitivity threshold
        });
    });
});
