interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="md:flex hidden flex-row justify-between items-center mt-5 px-2">
      <h1 className="text-3xl font-bold text-emerald-600">{title}</h1>
      
      {subtitle && (
        <div className="text-gray-500 text-sm">
          {title} - <span className="font-semibold text-emerald-600">{subtitle}</span>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
