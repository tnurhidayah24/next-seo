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
	width?: string;
	height?: string;
	alt?: string;
}