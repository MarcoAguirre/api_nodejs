module.exports = {
    branches: ['test/release_tag'],
    tagFormat: "v${version}-stg",
    plugins: [
        ["@semantic-release/commit-analyzer", {
            "preset": "angular",
            "releaseRules": [
                { "type": "docs", "release": "patch" },
                { "type": "refactor", "release": "patch" },
                { "type": "style", "release": "patch" }
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        '@semantic-release/github',
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md"],
            "message": "chore(release): ${nextRelease.version} [skip ci]"
        }]
    ],
};