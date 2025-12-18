
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  stars: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
