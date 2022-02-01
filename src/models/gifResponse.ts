export interface IGifResponse {
  data: Data;
  meta: Meta;
}

export interface Meta {
  msg: string;
  status: number;
  response_id: string;
}

export interface Data {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user: User;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: boolean;
  website_url: string;
  instagram_url: string;
}

export interface Images {
  hd: Hd;
  downsized_large: Downsizedlarge;
  fixed_height_small_still: Downsizedlarge;
  original: Original;
  fixed_height_downsampled: Fixedheightdownsampled;
  downsized_still: Downsizedlarge;
  fixed_height_still: Downsizedlarge;
  downsized_medium: Downsizedlarge;
  downsized: Downsizedlarge;
  preview_webp: Downsizedlarge;
  original_mp4: Hd;
  fixed_height_small: Fixedheightsmall;
  fixed_height: Fixedheightsmall;
  downsized_small: Hd;
  preview: Hd;
  fixed_width_downsampled: Fixedheightdownsampled;
  fixed_width_small_still: Downsizedlarge;
  fixed_width_small: Fixedheightsmall;
  original_still: Downsizedlarge;
  fixed_width_still: Downsizedlarge;
  looping: Looping;
  fixed_width: Fixedheightsmall;
  preview_gif: Downsizedlarge;
  '480w_still': _480wstill;
}

export interface _480wstill {
  url: string;
  width: string;
  height: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export interface Fixedheightsmall {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Fixedheightdownsampled {
  height: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Original {
  frames: string;
  hash: string;
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Downsizedlarge {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface Hd {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}