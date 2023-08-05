



export const createDiscipline = async (discipline) => {
    const { data } = await $host.post('api/discipline');
};