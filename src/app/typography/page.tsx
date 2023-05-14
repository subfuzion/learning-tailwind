export default function page() {
  return (
    <>
      <div className="container mx-auto">
        <article className="prose">
          <h1>Typography</h1>

          <div>
            <h2>Font</h2>

            <div>
              <h3>Family</h3>
              <p>
                Use one of these three classes:

                <ul className="font-mono">
                  <li>font-sans</li>
                </ul>
                <ul>
                  <li>font-serif</li>
                </ul>
                <ul>
                  <li>font-mono</li>
                </ul>
              </p>

              <div>
                <h4>Example</h4>
                <p className="font-mono">
                  &lt;p className=&quot;font-serif&quot;&gt;Hello world&lt;/&gt;
                </p>
                <p>
                  <p className="font-serif">Hello world</p>
                </p>

              </div>

            </div>
            <div>
              <h3>Size</h3>
              <p></p>
            </div>
            <div>
              <h3>Weight</h3>
              <p></p>
            </div>
            <div>
              <h3>Style</h3>
              <p></p>
            </div>

            <div>
              <h2>Text</h2>

              <div>
                <h3>Color</h3>
                <p></p>
              </div>
              <div>
                <h3>Alignment</h3>
                <p></p>
              </div>
            </div>
          </div>

        </article>
      </div>
    </>
  );
}
