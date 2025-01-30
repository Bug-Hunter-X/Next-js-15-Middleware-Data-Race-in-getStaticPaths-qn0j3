// bugSolution.js
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // Fetch data separately before getStaticPaths
  const data = await fetchData();

  return NextResponse.next();
}

// Function to fetch data (replace with your actual data fetching)
async function fetchData() {
  // Simulate fetching data (replace with your actual data source)
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network request
  return [{ params: { id: '1' } }, { params: { id: '2' } }];
}

export const getStaticPaths = async () => {
  const data = await fetchData();
  return {
    paths: data.map(item => ({ params: item.params })),
    fallback: false
  }
}

// ... rest of your component