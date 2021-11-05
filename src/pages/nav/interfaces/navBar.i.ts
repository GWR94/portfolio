export interface NavBarProps {
  closeNav?: () => void;
  color: string;
  navBackground?: string;
  active: string;
  home?: boolean;
  navColor?: string;
}

export interface HiddenNavProps {
  color: string;
  navBackground?: string;
  navColor?: string;
}
