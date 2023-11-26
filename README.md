<p align="center">
	<a href="https://www.npmjs.com/package/@tnurhidayah24/next-seo" target="_blank">
		<img src="https://raw.githubusercontent.com/tnurhidayah24/next-seo/master/assets/next-seo.svg" width="400" alt="Next SEO Logo">
	</a>
</p>
<p align="center">
	<a href="https://www.npmjs.com/package/@tnurhidayah24/next-seo"><img src="https://img.shields.io/npm/dw/@tnurhidayah24/next-seo?style=flat-square" alt="Total Downloads"></a>
	<a href="https://www.npmjs.com/package/@tnurhidayah24/next-seo"><img src="https://img.shields.io/npm/v/@tnurhidayah24/next-seo" alt="Latest Stable Version"></a>
	<a href="https://www.npmjs.com/package/@tnurhidayah24/next-seo"><img src="https://img.shields.io/npm/l/@tnurhidayah24/next-seo" alt="License"></a>
</p>

# Next JS SEO (Search Engine Optimization)

SEO, or Search Engine Optimization, is a way for a website to hang out on search engine pages, whether it's on Bing, Google, or even Yahoo.

There are various SEO techniques, some call it on-page SEO while others refer to it as off-page SEO. But in essence, <a href="https://taufiksi.com/seo-on-page/">SEO</a> is a way to make your website appear on search engine pages.

Regardless of the framework used, once we grasp SEO, our website stands a good chance of appearing on the first page. This particular package facilitates quicker access to the first page and seamlessly integrates within the Next JS framework.

Let's try using this package

#### Table of Contents

- [Usage](#usage)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Default SEO](#default-seo)
- [Open Graph](#open-graph)
- [Twitter Card](#twitter-card)
- [Canonical](#canonical)
- [Additional Meta Tags](#additional-meta-tags)

## Usage

The following are some guides on how to use the SEO package for NextJS. So that we can develop websites according to Google's algorithms.

### Installation

Install the package using npm or yarn

```bash
npm install @tnurhidayah24/next-seo
```

or

```bash
yarn add @tnurhidayah24/next-seo
```

### Basic Usage

```js
import { Meta } from "@tnurhidayah24/next-seo";

const Page = () => {
	return (
		<>
			<Meta
				title="Next SEO"
				description="Next SEO is a plug in that makes it easy for us to do SEO in Next JS"
			/>
		</>
	);
};

export default Page;
```
