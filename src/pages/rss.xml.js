import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export async function GET(context) {
    const posts = (await getCollection("posts")).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
    );
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            link: `/posts/${post.slug}/`,
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.short,
        })),
        stylesheet: '/rss-styles.xsl'
    })
};