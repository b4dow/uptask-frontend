import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "@/api/ProjectAPI";
import EditProjectForm from "@/components/projects/EditProjectForm";

export default function EditProjectView() {
  const params = useParams();
  const navigate = useNavigate();
  const projectId = params.projectId!;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return navigate("/404");
  if (data) return <EditProjectForm data={data} />;
}
