export type PrimeItemProps = {
  name: string;
  description: string;
};

const PrimeItem: React.FC<PrimeItemProps> = ({ name, description }) => {
  return (
    <section>
      <p>
        {name} - {description}
      </p>
    </section>
  );
};

export default PrimeItem;
