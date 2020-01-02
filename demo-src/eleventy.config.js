const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { pairedShortcode } = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPassthroughCopy("*.css");
	eleventyConfig.addPassthroughCopy("demo-src/*.css");

	eleventyConfig.addPairedShortcode("example", function(content, args) {
		let [language, ...highlightNumbers] = args.split(" ");

		return `<resize-asaurus>
	${content}
</resize-asaurus>
<details class="source-details">
	<summary>Source code</summary>
	${pairedShortcode(content, language, highlightNumbers.join(" "))}
</details>`;
	});
};