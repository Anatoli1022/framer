// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → social_links*
 */
export interface FooterDocumentDataSocialLinksItem {
  /**
   * social_link field in *Footer → social_links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[].social_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  social_link: prismic.LinkField;

  /**
   * image_link field in *Footer → social_links*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[].image_link
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_link: prismic.ImageField<never>;
}

type FooterDocumentDataSlicesSlice = FooterItemSlice;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * logo_link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_link: prismic.LinkField;

  /**
   * text field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * social_links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_links: prismic.GroupField<Simplify<FooterDocumentDataSocialLinksItem>>;

  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | PricesSectionSlice
  | StreamlinedSectionSlice
  | SignUpSectionSlice
  | MoreEffectiveSlice
  | UserCommentsSectionSlice
  | SectionLogosSlice
  | HeroSecrionSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type ListDocumentDataSlicesSlice = TextSlice;

/**
 * Content for list documents
 */
interface ListDocumentData {
  /**
   * Slice Zone field in *list*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: list.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ListDocumentDataSlicesSlice>;
}

/**
 * list document from Prismic
 *
 * - **API ID**: `list`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ListDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ListDocumentData>, "list", Lang>;

/**
 * Item in *Navigation → Menu items*
 */
export interface NavigationDocumentDataMenuItemsItem {
  /**
   * Label field in *Navigation → Menu items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.menu_items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Navigation → Menu items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.menu_items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Menu items field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.menu_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<Simplify<NavigationDocumentDataMenuItemsItem>>;

  /**
   * logo_link field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_link: prismic.LinkField;

  /**
   * logo field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * labellogo field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.labellogo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  labellogo: prismic.KeyTextField;

  /**
   * get_free field in *Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.get_free
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  get_free: prismic.LinkField;

  /**
   * label_get_free field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.label_get_free
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_get_free: prismic.KeyTextField;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | FooterDocument
  | HomepageDocument
  | ListDocument
  | NavigationDocument
  | PageDocument;

/**
 * Primary content in *FooterItem → Primary*
 */
export interface FooterItemSliceDefaultPrimary {
  /**
   * title field in *FooterItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_item.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *FooterItem → Items*
 */
export interface FooterItemSliceDefaultItem {
  /**
   * link field in *FooterItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_item.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * link_label field in *FooterItem → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_item.items[].link_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_label: prismic.KeyTextField;
}

/**
 * Default variation for FooterItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterItemSliceDefaultPrimary>,
  Simplify<FooterItemSliceDefaultItem>
>;

/**
 * Slice variation for *FooterItem*
 */
type FooterItemSliceVariation = FooterItemSliceDefault;

/**
 * FooterItem Shared Slice
 *
 * - **API ID**: `footer_item`
 * - **Description**: FooterItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterItemSlice = prismic.SharedSlice<
  "footer_item",
  FooterItemSliceVariation
>;

/**
 * Primary content in *HeroSection → Primary*
 */
export interface HeroSecrionSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *HeroSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.eyebrowheadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowheadline: prismic.KeyTextField;

  /**
   * title field in *HeroSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *HeroSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * callToActionLabel field in *HeroSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.calltoactionlabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  calltoactionlabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *HeroSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.calltoactionlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  calltoactionlink: prismic.LinkField;

  /**
   * infoLabel field in *HeroSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.infolabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  infolabel: prismic.KeyTextField;

  /**
   * info field in *HeroSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_secrion.primary.info
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  info: prismic.LinkField;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSecrionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSecrionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSecrionSliceVariation = HeroSecrionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_secrion`
 * - **Description**: HeroSecrion
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSecrionSlice = prismic.SharedSlice<
  "hero_secrion",
  HeroSecrionSliceVariation
>;

/**
 * Primary content in *MoreEffective → Primary*
 */
export interface MoreEffectiveSliceDefaultPrimary {
  /**
   * span field in *MoreEffective → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.primary.span
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  span: prismic.KeyTextField;

  /**
   * title field in *MoreEffective → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * text field in *MoreEffective → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * image field in *MoreEffective → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *MoreEffective → Items*
 */
export interface MoreEffectiveSliceDefaultItem {
  /**
   * image field in *MoreEffective → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *MoreEffective → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * text field in *MoreEffective → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * label field in *MoreEffective → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *MoreEffective → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * arrow field in *MoreEffective → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: more_effective.items[].arrow
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  arrow: prismic.ImageField<never>;
}

/**
 * Default variation for MoreEffective Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MoreEffectiveSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MoreEffectiveSliceDefaultPrimary>,
  Simplify<MoreEffectiveSliceDefaultItem>
>;

/**
 * Slice variation for *MoreEffective*
 */
type MoreEffectiveSliceVariation = MoreEffectiveSliceDefault;

/**
 * MoreEffective Shared Slice
 *
 * - **API ID**: `more_effective`
 * - **Description**: MoreEffective
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MoreEffectiveSlice = prismic.SharedSlice<
  "more_effective",
  MoreEffectiveSliceVariation
>;

/**
 * Primary content in *PricesSection → Primary*
 */
export interface PricesSectionSliceDefaultPrimary {
  /**
   * span field in *PricesSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices_section.primary.span
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  span: prismic.KeyTextField;

  /**
   * title field in *PricesSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * text field in *PricesSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * popular field in *PricesSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: prices_section.primary.popular
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  popular: prismic.KeyTextField;
}

/**
 * Default variation for PricesSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricesSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PricesSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PricesSection*
 */
type PricesSectionSliceVariation = PricesSectionSliceDefault;

/**
 * PricesSection Shared Slice
 *
 * - **API ID**: `prices_section`
 * - **Description**: PricesSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricesSectionSlice = prismic.SharedSlice<
  "prices_section",
  PricesSectionSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *SectionLogos → Items*
 */
export interface SectionLogosSliceDefaultItem {
  /**
   * Image field in *SectionLogos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_logos.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for SectionLogos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionLogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SectionLogosSliceDefaultItem>
>;

/**
 * Slice variation for *SectionLogos*
 */
type SectionLogosSliceVariation = SectionLogosSliceDefault;

/**
 * SectionLogos Shared Slice
 *
 * - **API ID**: `section_logos`
 * - **Description**: SectionLogos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionLogosSlice = prismic.SharedSlice<
  "section_logos",
  SectionLogosSliceVariation
>;

/**
 * Primary content in *SignUpSection → Primary*
 */
export interface SignUpSectionSliceDefaultPrimary {
  /**
   * title field in *SignUpSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * text field in *SignUpSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * getLabel field in *SignUpSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.getlabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  getlabel: prismic.KeyTextField;

  /**
   * get field in *SignUpSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.get
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  get: prismic.LinkField;

  /**
   * labelLearn field in *SignUpSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.labellearn
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  labellearn: prismic.KeyTextField;

  /**
   * learn field in *SignUpSection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.learn
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  learn: prismic.LinkField;

  /**
   * arrow field in *SignUpSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up_section.primary.arrow
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  arrow: prismic.ImageField<never>;
}

/**
 * Default variation for SignUpSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SignUpSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SignUpSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SignUpSection*
 */
type SignUpSectionSliceVariation = SignUpSectionSliceDefault;

/**
 * SignUpSection Shared Slice
 *
 * - **API ID**: `sign_up_section`
 * - **Description**: SignUpSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SignUpSectionSlice = prismic.SharedSlice<
  "sign_up_section",
  SignUpSectionSliceVariation
>;

/**
 * Primary content in *StreamlinedSection → Primary*
 */
export interface StreamlinedSectionSliceDefaultPrimary {
  /**
   * span field in *StreamlinedSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: streamlined_section.primary.span
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  span: prismic.KeyTextField;

  /**
   * title field in *StreamlinedSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: streamlined_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * text field in *StreamlinedSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: streamlined_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Primary content in *StreamlinedSection → Items*
 */
export interface StreamlinedSectionSliceDefaultItem {
  /**
   * title field in *StreamlinedSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: streamlined_section.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * text field in *StreamlinedSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: streamlined_section.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for StreamlinedSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StreamlinedSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StreamlinedSectionSliceDefaultPrimary>,
  Simplify<StreamlinedSectionSliceDefaultItem>
>;

/**
 * Slice variation for *StreamlinedSection*
 */
type StreamlinedSectionSliceVariation = StreamlinedSectionSliceDefault;

/**
 * StreamlinedSection Shared Slice
 *
 * - **API ID**: `streamlined_section`
 * - **Description**: StreamlinedSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StreamlinedSectionSlice = prismic.SharedSlice<
  "streamlined_section",
  StreamlinedSectionSliceVariation
>;

/**
 * Primary content in *ListItem → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * image field in *ListItem → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * popular field in *ListItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.popular
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  popular: prismic.KeyTextField;

  /**
   * span field in *ListItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.span
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  span: prismic.KeyTextField;

  /**
   * price field in *ListItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.price
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  price: prismic.KeyTextField;

  /**
   * spantext field in *ListItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.spantext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  spantext: prismic.KeyTextField;

  /**
   * label field in *ListItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *ListItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * most_popular field in *ListItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.most_popular
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  most_popular: prismic.KeyTextField;
}

/**
 * Primary content in *ListItem → Items*
 */
export interface TextSliceDefaultItem {
  /**
   * text field in *ListItem → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for ListItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  Simplify<TextSliceDefaultItem>
>;

/**
 * Slice variation for *ListItem*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * ListItem Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *UserCommentsSection → Primary*
 */
export interface UserCommentsSectionSliceDefaultPrimary {
  /**
   * span field in *UserCommentsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_comments_section.primary.span
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  span: prismic.KeyTextField;

  /**
   * title field in *UserCommentsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_comments_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *UserCommentsSection → Items*
 */
export interface UserCommentsSectionSliceDefaultItem {
  /**
   * text field in *UserCommentsSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_comments_section.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * avatar field in *UserCommentsSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: user_comments_section.items[].avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;

  /**
   * name field in *UserCommentsSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_comments_section.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * tegName field in *UserCommentsSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_comments_section.items[].tegname
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tegname: prismic.RichTextField;
}

/**
 * Default variation for UserCommentsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UserCommentsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<UserCommentsSectionSliceDefaultPrimary>,
  Simplify<UserCommentsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *UserCommentsSection*
 */
type UserCommentsSectionSliceVariation = UserCommentsSectionSliceDefault;

/**
 * UserCommentsSection Shared Slice
 *
 * - **API ID**: `user_comments_section`
 * - **Description**: UserCommentsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UserCommentsSectionSlice = prismic.SharedSlice<
  "user_comments_section",
  UserCommentsSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSocialLinksItem,
      FooterDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ListDocument,
      ListDocumentData,
      ListDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataMenuItemsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      FooterItemSlice,
      FooterItemSliceDefaultPrimary,
      FooterItemSliceDefaultItem,
      FooterItemSliceVariation,
      FooterItemSliceDefault,
      HeroSecrionSlice,
      HeroSecrionSliceDefaultPrimary,
      HeroSecrionSliceVariation,
      HeroSecrionSliceDefault,
      MoreEffectiveSlice,
      MoreEffectiveSliceDefaultPrimary,
      MoreEffectiveSliceDefaultItem,
      MoreEffectiveSliceVariation,
      MoreEffectiveSliceDefault,
      PricesSectionSlice,
      PricesSectionSliceDefaultPrimary,
      PricesSectionSliceVariation,
      PricesSectionSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SectionLogosSlice,
      SectionLogosSliceDefaultItem,
      SectionLogosSliceVariation,
      SectionLogosSliceDefault,
      SignUpSectionSlice,
      SignUpSectionSliceDefaultPrimary,
      SignUpSectionSliceVariation,
      SignUpSectionSliceDefault,
      StreamlinedSectionSlice,
      StreamlinedSectionSliceDefaultPrimary,
      StreamlinedSectionSliceDefaultItem,
      StreamlinedSectionSliceVariation,
      StreamlinedSectionSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceDefaultItem,
      TextSliceVariation,
      TextSliceDefault,
      UserCommentsSectionSlice,
      UserCommentsSectionSliceDefaultPrimary,
      UserCommentsSectionSliceDefaultItem,
      UserCommentsSectionSliceVariation,
      UserCommentsSectionSliceDefault,
    };
  }
}
