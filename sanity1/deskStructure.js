import S from "@sanity/desk-tool/structure-builder";

export default () =>
  //   S.list()
  //     .title("Base")
  //     .items([
  //       S.listItem()
  //         .title("Setting")
  //         .child(S.document().schemaType("projects").documentId("projects")),
  //       ...S.documentTypeListItems().filter(
  //         (listItem) => !["projects"].includes(listItem.getId())
  //       ),
  //     ]);

  S.list()
    .title("Manual")
    .items([
      S.listItem()
        .title("Filtered Posts")
        .child(
          S.list()
            .title("Filters")
            .items([
              S.listItem()
                .title("Posts By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Posts by author")
                    .child((authorId) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type=="projects" && $authorId == author._ref')
                        .params({ authorId })
                    )
                ),
              S.listItem()
                .title("Posts by categories")
                .child(
                  S.documentTypeList("category")
                    .title("Post by Category")
                    .child((categoryid) =>
                      S.documentList()
                        .title("Posts")
                        .filter(
                          '_type=="post" && $categoryId in categories[]._ref'
                        )
                        .params({ categoryId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Setting")
        .child(
          S.list()
            .title("Setting projects")
            .items([
              S.listItem()
                .title("projects")
                .child(
                  S.document().schemaType("projects").documentId("projects")
                ),
              S.listItem()
                .title("author")
                .child(S.document().schemaType("author").documentId("author")),
              S.listItem()
                .title("post")
                .child(S.document().schemaType("post").documentId("post")),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem) => !["projects", "author", "post"].includes(listItem.getId())
      ),
      S.divider(),
    ]);
