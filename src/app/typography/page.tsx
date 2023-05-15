interface CardProps {
  title: string;
  description?: any;
  example?: string;
  result?: any;
  reference?: string;
}

function Card(props: CardProps) {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg mt-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <div>{props.description}</div>

        <div>
          <div className="font-bold mt-8 mb-4 text-lg">Example</div>
          <div className="font-mono">{props.example}</div>

          <div className="font-bold mt-8 text-lg">Result</div>
          <div className="font-serif text-lg">{props.result}</div>
        </div>

        {props.reference && (
          <div>
            <a href={props.reference} target="_blank">
              Reference 🚀
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default function Typography() {
  return (
    <>
      <div className="container mx-auto">
        <article className="prose">
          <h1>Typography</h1>

          <div>
            <h2>Font</h2>

            <Card
                title="Font Family"
                description={
                  <>
                    <p>Use one of these three classes:</p>
                    <ul className="font-mono">
                      <li>font-sans</li>
                      <li>font-serif</li>
                      <li>font-mono</li>
                    </ul>
                  </>
                }
                example='<p className="font-serif">Hello world</p>'
                result={<p className="font-serif">Hello world</p>}
                reference="https://tailwindcss.com/docs/font-family"
            />

            <Card
              title="Font Size"
              description={
                <>
                  <p>Use one of these three classes:</p>
                  <ul className="font-mono">
                    <li>font-sans</li>
                    <li>font-serif</li>
                    <li>font-mono</li>
                  </ul>
                </>
              }
              example='<p className="font-serif">Hello world</p>'
              result={<p className="font-serif">Hello world</p>}
              reference="https://tailwindcss.com/docs/font-family"
            />

            {/*<div>*V/}
            {/*  <h3>Size</h3>*/}
            {/*  <p></p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <h3>Weight</h3>*/}
            {/*  <p></p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*  <h3>Style</h3>*/}
            {/*  <p></p>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*  <h2>Text</h2>*/}

            {/*  <div>*/}
            {/*    <h3>Color</h3>*/}
            {/*    <p></p>*/}
            {/*  </div>*/}
            {/*  <div>*/}
            {/*    <h3>Alignment</h3>*/}
            {/*    <p></p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </article>
      </div>
    </>
  );
}
