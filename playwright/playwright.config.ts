import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    retries: 0,
    reporter: [["html", { open: "never" }]],
    use: {
        headless: true,
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        video: "retain-on-failure"
    },
    projects: [
        { name: "chromium", use: { ...devices["Desktop Chrome"] } },
        { name: "firefox", use: { ...devices["Desktop Firefox"] } }
    ]
});
