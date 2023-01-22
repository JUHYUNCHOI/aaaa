import react, { useEffect } from 'react';
import Observer from "../../utils/observer";

const Page1 = () => {
  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
  }, []);


  return (
    <div className="container">
      <div className="h-component hidden">
        <div className="center">
        </div>
      </div>
      <div className="h-component flex-column">
        <h1>What is Austism Spectrum Disorder?</h1>
        <ul>
          <li>
            Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, social interaction, and behavior. Symptoms can vary widely and can range from mild to severe. Common symptoms include difficulty with social interactions, difficulty with verbal and nonverbal communication, and repetitive behaviors or interests. The exact cause of autism is not known, but it is believed to be a combination of genetic and environmental factors. There is no cure for autism, but early intervention and therapy can improve outcomes for individuals with the disorder.
          </li>
          <li>
            Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, social interaction, and behavior. Symptoms can vary widely and can range from mild to severe. Common symptoms include difficulty with social interactions, difficulty with verbal and nonverbal communication, and repetitive behaviors or interests. The exact cause of autism is not known, but it is believed to be a combination of genetic and environmental factors. There is no cure for autism, but early intervention and therapy can improve outcomes for individuals with the disorder.
          </li>
        </ul>

        <h1>What is Austism Spectrum Disorder?</h1>
        <ul>
          <li>
            aaaa</li>
          <li>
            bbbb</li>
        </ul>
        <h1>What is Austism Spectrum Disorder?</h1>
        <p>
          Autism Spectrum Disorder (ASD) is a developmental disorder that affects communication, social interaction, and behavior. Symptoms can vary widely and can range from mild to severe. Common symptoms include difficulty with social interactions, difficulty with verbal and nonverbal communication, and repetitive behaviors or interests. The exact cause of autism is not known, but it is believed to be a combination of genetic and environmental factors. There is no cure for autism, but early intervention and therapy can improve outcomes for individuals with the disorder.
        </p>
      </div>
    </div>
  );
}

export default Page1;
