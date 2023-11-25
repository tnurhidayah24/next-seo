import { OpenGraphProps } from "~/interface/opengraph-props";
import { TwitterProps } from "~/interface/twitter-props";

export interface SEOProps{
	title?: string;
	description?: string;
	canonical?: string;
	robots?: string;
	keywords?: string;
	author?: string;
	openGraph?: OpenGraphProps;
	twitter?: TwitterProps;
	googleSiteVerification?: string;
	bingSiteVerification?: string;
	yandexVerification?: string;
	baiduSiteVerification?: string;
	pinterestSiteVerification?: string;
}