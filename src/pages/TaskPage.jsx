import { ChevronLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Enveloper from "../components/Enveloper";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Default Task Title";
  const description =
    searchParams.get("description") || "Default Task Description";

  return (
    <Enveloper>
      <div className="flex justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-0 bottom-0 text-slate-100"
        >
          <ChevronLeft />
        </button>
        <Title>Detalhes da Tarefa</Title>
      </div>
      <div className="bg-slate-200 p-4 rounded-md ">
        <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
    </Enveloper>
  );
}
export default TaskPage;
