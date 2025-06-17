import PrimeItem from "./PrimeItem";
import type { PrimeItemProps } from "./PrimeItem";

const primes: PrimeItemProps[] = [
  { name: "Cedo Prime", description: "A very nice shotgun" },
  { name: "Trumna Prime", description: "Super massive magazine, neat alternate fire" },
  { name: "Burston Prime", description: "Burst rifle that is crit heavy" },
];

const AllPrimes: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl underline">All Primes</h1>
      {primes && primes.map((prime: PrimeItemProps, i: number) => <PrimeItem key={i} name={prime.name} description={prime.description} />)}
    </>
  );
};

export default AllPrimes;
