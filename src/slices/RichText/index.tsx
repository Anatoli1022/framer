import { RichTextField } from '@prismicio/client';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1 className="text-8xl mt-7 font-bold ">{children}</h1>
  ),
  heading2: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold text-lg">{children}</h3>,
  hyperlink: ({ children, node }) => (
    <PrismicNextLink field={node.data} className="font-bold underline">
      {children}
    </PrismicNextLink>
  ),
};

interface RichTextProps {
  field: RichTextField;
}
export const RichText = ({ field }: RichTextProps) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
};
