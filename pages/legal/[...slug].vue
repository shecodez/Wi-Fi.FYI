<template>
  <div container mx-auto py-10>
    <client-only>
      <ContentDoc>
        <template #default="{ doc }">
          <section grid grid-cols-8 gap-10 pt-4>
            <aside v-if="!!doc.body.toc.links.length" col-span-full md:col-span-2 hidden md:block>
              <div sticky top-24>
                <TableOfContents :links="doc.body.toc.links" />
              </div>
            </aside>

            <div col-span-full col-span-6>
              <article prose dark:prose-invert>
                <ContentRenderer :value="doc" />
              </article>
            </div>
          </section>
        </template>
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentDoc>
    </client-only>
  </div>
</template>
