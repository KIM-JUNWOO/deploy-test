import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

export default function Home() {
  return <div>sdff</div>;
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
