const TabList = ({ setContent }) => (
  <ul className="cursor-default">
    <li
      className="m-4 cursor-pointer mt-0 md:mt-4"
      onClick={() => {
        setContent("ux-and-ui");
      }}
    >
      UX and UI
    </li>
    <li
      className="m-4 cursor-pointer"
      onClick={() => {
        setContent("campaigns");
      }}
    >
      Campaigns
    </li>
    <li
      className="m-4 cursor-pointer"
      onClick={() => {
        setContent("graphic-design");
      }}
    >
      Graphic Design
    </li>
    <li
      className="m-4 cursor-pointer"
      onClick={() => {
        setContent("social-and-video");
      }}
    >
      Social and Video
    </li>
    <li
      className="m-4 cursor-pointer"
      onClick={() => {
        setContent("art-direction");
      }}
    >
      Art Direction
    </li>
  </ul>
);

export default TabList;
