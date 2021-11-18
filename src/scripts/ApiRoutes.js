export const GetApiRoutes = (endpoint)=> {
    const routes = {
        LessThanTen: `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211117T211958Z&X-Amz-Expires=86400&X-Amz-Signature=d9fcaf092f81b55b8371295cde91a3651c87f17b43f8b4a62d226c91ea5846f1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22&x-id=GetObject`,
        MoreThanTen: `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211117T212033Z&X-Amz-Expires=86400&X-Amz-Signature=0fb8874fdb16b568c2d2f20d5df7eb8ef8aac33a9b2638f7303582d0fc66063f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22&x-id=GetObject`
    };

    return routes[endpoint];
};
