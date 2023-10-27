
export default function Page({ params }: { params: { id: string } }) {
  return <div className="hidden">My Post: {params.id}</div>
}
