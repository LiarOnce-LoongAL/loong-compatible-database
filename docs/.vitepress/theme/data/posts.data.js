import { createContentLoader } from 'vitepress'

export default createContentLoader(['posts/**/*.md'], {
    transform(rawData) {
        return {
            posts: rawData
                .filter(({ url }) => url !== '/posts/' && !url.endsWith('index.md'))
                .map(({ url, frontmatter }) => ({
                    title: frontmatter.title,
                    author: frontmatter.author,
                    url,
                    date: formatDate(frontmatter.date),
                }))
                .sort((a, b) => new Date(b.date) - new Date(a.date))
        }
    }
})

function formatDate(date) {
    return new Date(date).toLocaleDateString()
}