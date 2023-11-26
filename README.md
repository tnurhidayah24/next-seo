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
- [Robots](#robots-props)

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

First, we have to create an `.env` file which will be used to store several default variables so that SEO runs dynamically.

```env
NEXT_PUBLIC_APP_NAME=Next SEO
NEXT_PUBLIC_AUTHOR=author
NEXT_PUBLIC_PUBLIC_URL=https://example.com
```

Then we create a file in the pages folder, for example, the name of the file is `index.js`. Then we import the Meta component from the package.

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

### Default SEO

The following are some default SEO that we can use in the Meta component.

| Property                           | Type                    | Default                         | Description                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                            | string                  | `NEXT_PUBLIC_APP_NAME`          | Set the meta title of the page                                                                                                                                                       |
| `robots`                           | object                  | `false`                         | Set the more meta information for the `X-Robots-Tag` [More Info](#robots-props)                                                                                                      |
| `description`                      | string                  | `null`                          | Set the page meta description                                                                                                                                                        |
| `keywords`                         | string                  | `null`                          | Set the page meta keywords                                                                                                                                                           |
| `author`                           | string                  | `NEXT_PUBLIC_AUTHOR`            | Set the page meta author                                                                                                                                                             |
| `canonical`                        | string                  | `NEXT_PUBLIC_PUBLIC_URL`        | Set the page canonical url                                                                                                                                                           |
| `openGraph`                        | object                  | `true`                          | Set the page openGraph [More Info](#open-graph)                                                                                                                                      |
| `twitter`                          | object                  | `true`                          | Set the page Twitter Card [More Info](#twitter-card)                                                                                                                                 |
| `googleSiteVerification`           | string                  | `null`                          | Set the meta verification google console webmaster                                                                                                                                   |
| `bingSiteVerification`             | string                  | `null`                          | Set the meta verification bing console                                                                                                                                               |
| `yandexVerification`               | string                  | `null`                          | Set the meta verification yandex                                                                                                                                                     |
| `baiduSiteVerification`            | string                  | `null`                          | Set the meta verification baidu                                                                                                                                                      |
| `pinterestSiteVerification`        | string                  | `null`                          | Set the meta verification pinterest                                                                                                                                                  |

## Open Graph

Open Graph is a protocol that allows developers to control the content of their website when shared on social media. Open Graph is a protocol that allows developers to control the content of their website when shared on social media.

| Property                           | Type                    | Default                         | Description                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `openGraph.locale`                 | string                  | `en_US`                         | Set the openGraph locale of the page                                                                                                                                                 |
| `openGraph.title`                  | string                  | `NEXT_PUBLIC_APP_NAME`          | Set the openGraph title of the page                                                                                                                                                  |
| `openGraph.description`            | string                  | `null`                          | Set the openGraph description of the page                                                                                                                                            |
| `openGraph.url`                    | string                  | `NEXT_PUBLIC_PUBLIC_URL`        | Set the openGraph url of the page                                                                                                                                                    |
| `openGraph.type`                   | string                  | `website`                       | Set the openGraph type of the page                                                                                                                                                   |
| `openGraph.site_name`              | string                  | `NEXT_PUBLIC_APP_NAME`          | Is not editable, because set default                                                                                                                                                 |
| `openGraph.images`                 | object                  | `true`                          | Set the openGraph images of the page                                                                                                                                                 |
| `openGraph.images.url`             | string                  | `null`                          | Set the openGraph images url of the page                                                                                                                                             |
| `openGraph.images.secure_url`      | string                  | `null`                          | Set the openGraph images secure_url of the page                                                                                                                                      |
| `openGraph.images.width`           | string                  | `512`                           | Set the openGraph images width of the page                                                                                                                                           |
| `openGraph.images.height`          | string                  | `512`                           | Set the openGraph images height of the page                                                                                                                                          |
| `openGraph.images.type`            | string                  | `image/png`                     | Set the openGraph images type of the page                                                                                                                                            |

This is how to use OpenGraph properties

```js

import { Meta } from "@tnurhidayah24/next-seo";

const Page = () => {
 return (
  <>
   <Meta
    openGraph={{
     title: "Next SEO",
     description: "Next SEO is a plug in that makes it easy for us to do SEO in Next JS",
     url: "https://example.com",
     images: {
      url: "https://example.com/images/next-seo.png",
      secure_url: "https://example.com/images/next-seo.png",
      width: "512",
      height: "512",
      },
     }}
    />
   </>
  );
};

export default Page;
```

## Twitter Card

Twitter Card is a protocol that allows developers to control the content of their website when shared on twitter.

| Property                           | Type                    | Default                         | Description                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `twitter.cardType`                 | string                  | `summary_large_image`           | Set the type twitter card of the page,  which will be one of `summary`, `summary_large_image`, `app`, or `player`                                                                    |
| `twitter.label1`                   | string                  | `Written by`                    | Set the twitter label written of the page `not editable`                                                                                                                             |
| `twitter.data1`                    | string                  | `NEXT_PUBLIC_APP_NAME`          | Set the twitter title of the page                                                                                                                                                    |
| `twitter.label2`                   | string                  | `Est. reading time`             | Set the twitter label est reading of the page `not editable`                                                                                                                         |
| `twitter.data2`                    | string                  | `3 minutes`                     | Set the twitter est of the page                                                                                                                                                      |


This is how to use Twitter Card properties

```js

import { Meta } from "@tnurhidayah24/next-seo";

const Page = () => {
 return (
  <>
   <Meta
    twitter={{
     cardType: "summary_large_image",
     data1: "author",
     data2: "3 minutes",
     }}
    />
   </>
  );
};

export default Page;
```

## Robots Props

| Property                           | Type                    | Default                         | Description                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `robots.index`                     | boolean                 | `true`                          | Set the robots index of the page                                                                                                                                                     |
| `robots.follow`                    | boolean                 | `true`                          | Set the robots follow of the page                                                                                                                                                    |
| `robots.image`                     | boolean                 | `true`                          | Set the robots image of the page                                                                                                                                                     |
| `robots.archive`                   | boolean                 | `true`                          | Set the robots archive of the page                                                                                                                                                   |
| `robots.snippet`                   | boolean                 | `true`                          | Set the robots snippet of the page                                                                                                                                                   |
| `robots.translate`                 | boolean                 | `true`                          | Set the robots translate of the page                                                                                                                                                 |
| `robots.imagePreview`              | string                  | `large`                         | Set the robots imagePreview of the page                                                                                                                                              |
| `robots.videoPreview`              | string                  | `-1`                            | Set the robots videoPreview of the page                                                                                                                                              |
| `robots.maxSnippet`                | string                  | `-1`                            | Set the robots maxSnippet of the page                                                                                                                                                |

This is how to use Robots properties

```js

import { Meta } from "@tnurhidayah24/next-seo";

const Page = () => {
 return (
  <>
   <Meta
    robots={{
     index: true,
     }}
    />
   </>
  );
};

export default Page;
```
