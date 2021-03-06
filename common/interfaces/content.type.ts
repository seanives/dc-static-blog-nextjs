import AmplienceImage from './image.interface';
import AmplienceText from './text.interface';
import AmplienceVideo from './video.interface';
import { BlogReferenceList } from './blog-reference-list.interface';
import BlogPost from './blog-post.interface';
import { DefaultContentBody } from 'dc-delivery-sdk-js';

export function isAmplienceContent(
  contentItem: BlogReferenceList | BlogPost | AmplienceContent
): contentItem is AmplienceContent & DefaultContentBody {
  return 'video' in contentItem || 'image' in contentItem || 'text' in contentItem;
}

export type AmplienceContent = AmplienceImage | AmplienceText | AmplienceVideo;
