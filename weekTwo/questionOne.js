// Q:1 Explain how you would apply merge sort to sort large files that don't
// fit into memory. Discuss the challenges and steps involved.

// Sort Each Chunk In Memory:

// Divide the Large File into Chunks:

// Read the large file in chunks that can fit into memory. The size of each chunk depends on the available memory and the overall size of the file. These chunks are often referred to as "runs" or "blocks."

// For each chunk loaded into memory, apply the regular Merge Sort algorithm to sort the data within that chunk.
// Write Sorted Chunks to Temporary Files:

// After sorting each chunk, write the sorted data back to temporary files on disk. Each temporary file contains a sorted chunk of data.
// Merge Sorted Chunks:

// Merge the sorted temporary files to create a single sorted output file.
// Use a priority queue or a heap to efficiently merge the chunks while keeping track of the smallest element from each chunk.
// Repeat Merging If Necessary:

// If the size of the sorted chunks exceeds available memory, you may need to perform multiple rounds of merging until you have a single sorted file.
