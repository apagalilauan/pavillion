import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Chip from "./components/chip/Chip";
import SampleSection from "./components/section/SampleSection";
import { data } from "../database/data";

function App() {
  return (
    <>
      <div className="m-5">
        <h1 className="font-satoshi font-bold mb-2 text-lg">Button</h1>
        <div className="flex flex-wrap sm:flex-row  gap-5">
          <Button
            size="xs"
            fullWidth="false"
            variant="primary"
            onClick={() => alert("Button was Clicked!")}
          >
            Get a Demo
          </Button>
          <Button size="xs" fullWidth="false" variant="secondary">
            Log In
          </Button>
          <Button size="sm" fullWidth="false" variant="secondary">
            Learn more
          </Button>
          <Button size="lg" fullWidth="true" variant="disabled">
            Disabled
          </Button>
        </div>
      </div>

      <div className="m-5">
        <h1 className="font-satoshi font-bold mb-2 text-lg">Chip</h1>
        <div className="flex  gap-5 h-20 bg-gray-700 items-center px-5 rounded-lg">
          <Chip variant="outlined">Ux Design</Chip>
          <Chip variant="filled">Front-end Development</Chip>
        </div>
      </div>

      <div className="m-5">
        <h1 className="font-satoshi font-bold mb-2 text-lg">Cards</h1>
        <div className="flex  gap-5 py-5 bg-gray-800 items-center px-5 rounded-lg">
          <Card variant="tertiary" className=" text-white w-72">
            <h1 className="font-bold text-lg mb-1">Latest project</h1>
            <p className="text-md">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Card>
        </div>
      </div>

      <div className="px-5">
        <h1 className="font-satoshi font-bold mb-2 text-lg">Sample Section</h1>
        {data.map((item) => {
          return <SampleSection data={item} key="item.id" />;
        })}
      </div>
    </>
  );
}

export default App;
