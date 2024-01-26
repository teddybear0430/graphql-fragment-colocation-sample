type Props = {
  name?: string | null | undefined;
  image?: string | null | undefined;
};

export function Character({ name, image }: Props) {
  return (
    <div>
      <p>{name}</p>
      {image ? <img src={image} alt={name || ""} /> : <p>No Image</p>}
    </div>
  );
}
