import siteMetadata from '@/data/siteMetadata'
import Giscus from '@giscus/react'

export default function MyApp() {
  const {
    repo,
    repositoryId,
    category,
    categoryId,
    mapping,
    reactions,
    metadata,
    inputPosition,
    theme,
    lang,
    loading,
  } = siteMetadata?.comment?.giscusConfig

  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repositoryId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      reactionsEnabled={reactions}
      emitMetadata={metadata}
      inputPosition={inputPosition}
      theme={theme}
      lang={lang}
      loading={loading}
    />
  )
}
