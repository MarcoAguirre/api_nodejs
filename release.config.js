module.exports = {
    branches: ["main"],
    tagFormat: "v${version}-stg",
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
                releaseRules: [
                    { type: "docs", release: "patch" },
                    { type: "test", release: "patch" },
                    { type: "build", release: "patch" },
                    { type: "ci", release: "patch" },
                    { type: "refactor", release: "patch" },
                    { type: "style", release: "patch" },
                    { type: "release", release: "major" },
                ],
                parserOpts: {
                    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
                },
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                parserOpts: {
                    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
                },
                presetConfig: [
                    { type: "feat", section: "Features" },
                    { type: "fix", release: "Bug Fixes" },
                    { type: "docs", section: "Documentation", hidden: false },
                    { type: "test", section: "Test", hidden: true },
                    { type: "build", section: "Build", hidden: true },
                    { type: "ci", section: "CI/CD", hidden: false },
                    { type: "refactor", section: "Code Refactors", hidden: false },
                    { type: "style", section: "Styles", hidden: true },
                ],
            },
        ],
        "@semantic-release/changelog",
        [
            "@semantic-release/github",
            {
                releasedLabels: false,
            },
        ],
        [
            "@semantic-release/git",
            {
                assets: ["CHANGELOG.md", "ui/**", "docs/**", "api/**"],
                message: "chore(release): ${nextRelease.version}",
            },
        ],
    ],
};
