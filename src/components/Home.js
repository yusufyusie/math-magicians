function getParagraph() {
    const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi laborum quisquam eum ipsam iusto, animi blanditiis aperiam nobis laudantium dolore quas cumque molestias,a perferendis corporis optio repudiandae quia ?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quos quidem iure illo suscipit voluptatum non at laudantium! Eum voluptatibus doloremque voluptate deleniti odio
        natus qui ex tempore error, dignissimos nostrum!`;
    return str;
  }
  
  function Home() {
    return (
      <div>
        <h3>Welcome to Our page</h3>
        <p>
          {getParagraph()}
        </p>
        <p>
          {getParagraph()}
        </p>
      </div>
    );
  }
  
  export default Home;
  