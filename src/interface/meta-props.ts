

export interface SEOProps{
	title?: string;
	description?: string;
	canonical?: string;
	robots?: RobotsProps;
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

export interface OpenGraphProps{
	url?: string;
	title?: string;
	description?: string;
	locale?: string;
	type?: string;
	images?: ImageProps;
	site_name?: string;
};

export interface ImageProps{
	type?: string;
	url?: string;
	secure_url?: string;
	width?: string;
	height?: string;
}

export interface TwitterProps{
	cardType?: string;
	label1?: string;
	data1?: string;
	label2?: string;
	data2?: string;
}

export interface RobotsProps{
	index?: boolean;
	follow?: boolean;
	imagePreview?: string;
	videoPreview?: string;
	maxSnippet?: number;
	snippet?: string;
	archive?: boolean;
	image?: boolean;
	translate?: boolean;
}