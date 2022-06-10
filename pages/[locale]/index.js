import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

export default function Home() {
  return (
    <div>
      sdff
      <p>github actions</p>
    </div>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
