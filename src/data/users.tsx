/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  // For open-source sites, a link to the source code is required.
  // The source should be the *website's* source, not the project's source!
  | 'opensource'
  | 'product'
  // Feel free to add the 'design' tag as long as there's _some_ level of
  // CSS/swizzling.
  | 'design'
  // Site must have more than one locale.
  | 'i18n'
  | 'versioning'
  // Large sites are defined as those with > 200 pages, excluding versions.
  | 'large'
  | 'meta'
  | 'personal'
  // Right-to-left direction.
  | 'rtl';

// Add sites to this list
// prettier-ignore
const Users: User[] = [

  {
    title: 'Algolia DocSearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: require('./showcase/algolia.png'),
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch/tree/main/packages/website',
    tags: ['favorite', 'opensource', 'product'],
  },
  {
    title: 'Datagit',
    description:
      'A persian tutorial website strive to make quality education for everyone.',
    preview: require('./showcase/datagit.png'),
    website: 'https://datagit.ir/',
    source: 'https://github.com/ghaseminya/datagit_v2.docusaurus',
    tags: ['opensource', 'favorite', 'rtl'],
  },
  {
    title: 'Dyte',
    description: 'The most developer friendly live video SDK',
    preview: require('./showcase/dyte.png'),
    website: 'https://docs.dyte.io',
    source: 'https://github.com/dyte-in/docs',
    tags: [
      'favorite',
      'product',
      'design',
      'versioning',
      'large',
      'opensource',
    ],
  },
  {
    title: 'Eightshift',
    description:
      'All the tools you need to start building a modern WordPress project, using all the latest development tools.',
    preview: require('./showcase/eightshift-docs.png'),
    website: 'https://infinum.github.io/eightshift-docs/',
    source: 'https://github.com/infinum/eightshift-docs',
    tags: ['opensource', 'favorite', 'design'],
  },
  {
    title: '30 Days Of SWA',
    description: 'A 30-Day Developer Guide to Azure Static Web Apps',
    preview: require('./showcase/30-days-swa.png'),
    website: 'https://www.azurestaticwebapps.dev',
    source: 'https://github.com/staticwebdev/30DaysOfSWA/tree/main/www',
    tags: ['opensource', 'product'],
  },
  {
    title: '404Lab.Wiki',
    description: 'Docs and blogs about development and study',
    preview: require('./showcase/404lab-wiki.png'),
    website: 'https://wiki.404lab.top',
    source: 'https://github.com/HiChen404/MyWikiSite',
    tags: ['opensource', 'personal'],
  },
  {
    title: "7Wate's Wiki",
    description: 'Developer Wiki and Blog',
    preview: require('./showcase/7wate-wiki.png'),
    website: 'https://wiki.7wate.com/',
    source: 'https://github.com/7Wate/wiki',
    tags: ['opensource', 'personal'],
  },
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./showcase/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'design'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source Docusaurus sites can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message:
        'Beautiful Docusaurus sites, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  i18n: {
    label: translate({message: 'I18n'}),
    description: translate({
      message:
        'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },

  versioning: {
    label: translate({message: 'Versioning'}),
    description: translate({
      message:
        'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.versioning.description',
    }),
    color: '#fe6829',
  },

  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large Docusaurus sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },

  meta: {
    label: translate({message: 'Meta'}),
    description: translate({
      message: 'Docusaurus sites of Meta (formerly Facebook) projects',
      id: 'showcase.tag.meta.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blogs and digital gardens built with Docusaurus',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },

  rtl: {
    label: translate({message: 'RTL Direction'}),
    description: translate({
      message:
        'Docusaurus sites using the right-to-left reading direction support.',
      id: 'showcase.tag.rtl.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
