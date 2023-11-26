import Head from "next/head";
import React from "react";
import { APP_NAME, AUTHOR, PUBLIC_URL } from "~/config/env";
import {
	ROBOT_ARCHIVE,
	ROBOT_FOLLOW,
	ROBOT_IMAGE,
	ROBOT_IMAGE_PREVIEW,
	ROBOT_INDEX,
	ROBOT_MAX_SNIPPET,
	ROBOT_NOARCHIVE,
	ROBOT_NOFOLLOW,
	ROBOT_NOIMAGE,
	ROBOT_NOINDEX,
	ROBOT_NOSNIPPET,
	ROBOT_NOTRANSLATE,
	ROBOT_SNIPPET,
	ROBOT_TRANSLATE,
	ROBOT_VIDEO_PREVIEW,
} from "~/config/robots";
import { SEOProps } from "~/interface/meta-props";

export const UseHead = ({
	title,
	description,
	canonical,
	robots,
	keywords,
	author,
	openGraph,
	twitter,
	googleSiteVerification,
	bingSiteVerification,
	baiduSiteVerification,
	yandexVerification,
	pinterestSiteVerification,
}: SEOProps) => {
	const ROBOT_DEFAULT = `${robots?.index ? ROBOT_NOINDEX : ROBOT_INDEX}, ${
		robots?.follow ? ROBOT_NOFOLLOW : ROBOT_FOLLOW
	}, ${robots?.archive ? ROBOT_NOARCHIVE : ROBOT_ARCHIVE}, ${
		robots?.image ? ROBOT_NOIMAGE : ROBOT_IMAGE
	}, ${robots?.snippet ? ROBOT_NOSNIPPET : ROBOT_SNIPPET}, ${
		robots?.translate ? ROBOT_NOTRANSLATE : ROBOT_TRANSLATE
	}, max-image-preview:${
		robots?.imagePreview ? robots?.imagePreview : ROBOT_IMAGE_PREVIEW
	}, max-snippet:${
		robots?.maxSnippet ? robots?.maxSnippet : ROBOT_MAX_SNIPPET
	}, max-video-preview:${
		robots?.videoPreview ? robots?.videoPreview : ROBOT_VIDEO_PREVIEW
	}`;

	return (
		<Head>
			<title>{title ? `${title} - ${APP_NAME}` : APP_NAME}</title>
			{robots && <meta name="robots" content={ROBOT_DEFAULT} />}
			{keywords && <meta name="keywords" content={keywords} />}
			{description && <meta name="description" content={description} />}
			<meta name="author" content={author ? author : AUTHOR} />
			<link rel="canonical" href={canonical ? canonical : PUBLIC_URL} />
			<meta
				property="og:locale"
				content={openGraph?.locale ? openGraph?.locale : "en_US"}
			/>
			<meta
				property="og:type"
				content={openGraph?.type ? openGraph?.type : "website"}
			/>
			<meta
				property="og:title"
				content={openGraph?.title ? openGraph?.title : APP_NAME}
			/>
			{openGraph?.description && (
				<meta property="og:description" content={openGraph?.description} />
			)}
			<meta
				property="og:url"
				content={openGraph?.url ? openGraph?.url : PUBLIC_URL}
			/>
			<meta property="og:site_name" content={APP_NAME} />
			{openGraph?.images?.url && (
				<meta property="og:image" content={openGraph?.images?.url} />
			)}
			{openGraph?.images?.secure_url && (
				<meta
					property="og:image:secure_url"
					content={openGraph?.images?.secure_url}
				/>
			)}
			<meta
				property="og:image:type"
				content={openGraph?.images?.type ?? "image/png"}
			/>
			<meta
				property="og:image:width"
				content={openGraph?.images?.width ?? "512"}
			/>
			<meta
				property="og:image:height"
				content={openGraph?.images?.height ?? "512"}
			/>
			<meta
				name="twitter:card"
				content={twitter?.cardType ? twitter?.cardType : "summary_large_image"}
			/>
			<meta
				name="twitter:label1"
				content={twitter?.label1 ? twitter?.label1 : "Written by"}
			/>
			<meta
				name="twitter:data1"
				content={twitter?.data1 ? twitter?.data1 : APP_NAME}
			/>
			<meta
				name="twitter:label2"
				content={twitter?.label2 ? twitter?.label2 : "Est. reading time"}
			/>
			<meta
				name="twitter:data2"
				content={twitter?.data2 ? twitter?.data2 : "3 minutes"}
			/>
			{googleSiteVerification && (
				<meta
					name="google-site-verification"
					content={googleSiteVerification}
				/>
			)}
			{bingSiteVerification && (
				<meta name="bing-site-verification" content={bingSiteVerification} />
			)}
			{baiduSiteVerification && (
				<meta name="baidu-site-verification" content={baiduSiteVerification} />
			)}
			{yandexVerification && (
				<meta name="yandex-verification" content={yandexVerification} />
			)}
			{pinterestSiteVerification && (
				<meta name="p:domain_verify" content={pinterestSiteVerification} />
			)}
		</Head>
	);
};
