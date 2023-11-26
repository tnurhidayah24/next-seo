import React from "react";
import { SEOProps } from "../interface/meta-props";
import { UseHead } from "../use/use-head";

export const Meta = ({
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
	return (
		<UseHead
			title={title}
			description={description}
			canonical={canonical}
			robots={robots}
			keywords={keywords}
			author={author}
			openGraph={openGraph}
			twitter={twitter}
			googleSiteVerification={googleSiteVerification}
			bingSiteVerification={bingSiteVerification}
			baiduSiteVerification={baiduSiteVerification}
			yandexVerification={yandexVerification}
			pinterestSiteVerification={pinterestSiteVerification}
		/>
	);
};
