module.exports = {
    branches: ['test/actions_tag'],
    tagFormat: "v${version}-stg",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        '@semantic-release/github',
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md"],
            "message": "chore(release): ${nextRelease.version} [skip ci]"
        }]
    ],
};