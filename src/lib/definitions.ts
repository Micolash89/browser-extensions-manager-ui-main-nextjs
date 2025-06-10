export interface Tool {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface ExtensionComponentProps {
  name: string;
  description: string;
  url: string;
  isActive: boolean;
  onToggle?: (name: string, isActive: boolean) => void;
  onRemove?: (name: string) => void; 
  mensajeEliminar?: string;
  index: number;
}