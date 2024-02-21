export const PseudoElementPrint = () => (
  <div className="text-3xl">
    <a
      href="http://www.example.com"
      className="print:after:content-['_('_attr(href)_')']"
    >
      Link
    </a>
  </div>
);
