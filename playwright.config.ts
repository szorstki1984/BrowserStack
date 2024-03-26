import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout:150000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',

  reporter: process.env.CI?
  [
    ['list'],
    ['html', { open: 'never'}],
  ] : [
    ['list'],
    ['html', { open: 'never'}],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless:true,
    screenshot:"only-on-failure",
    actionTimeout:90000,
    // launchOptions:{
    //   slowMo:200
    // },
    // trace: 'on-first-retry',
  },
  expect:{
    timeout:45000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], 
                channel: 'chrome',
                viewport:{width:1920, height:1080}
              },
    },
  ],

});
