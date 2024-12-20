const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  export default function Profile() {
    const { name, imageUrl, imageSize } = user;
    return (
      <div>
        <h1>{name}</h1>
        <img
          className="avatar"
          src={imageUrl}
          alt={`Photo of ${name}`}
          style={{ width: imageSize, height: imageSize, borderRadius: "50%" }}
        />
        <h2>Products</h2>
        {products.map((product) => {
          const { title, id } = product;
          return (
            <ul key={id}>
              <li >
                <p>
                  <strong>{title}</strong>
                </p>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
  