export interface ContentData {
  name: string;
  totalViews: {
    total: number | string;
    "sky-go": number | string;
    "now-tv": number | string;
    peacock: number | string;
  };
  prevTotalViews: {
    total: number | string;
    "sky-go": number | string;
    "now-tv": number | string;
    peacock: number | string;
  };
  description: string;
  duration: number;
  assetImage: string;
  videoImage: string;
  provider: string;
  genre: string[];
}
