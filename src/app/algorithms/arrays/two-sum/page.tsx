import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import MathBlock from '@/components/MathBlock';
import Lightbox from '@/components/Lightbox';
import { Clock, BookOpen, Target, Zap } from 'lucide-react';

export default function TwoSumPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb 
        items={[
          { label: 'Algorithms', href: '/algorithms/arrays' },
          { label: 'Arrays & Strings', href: '/algorithms/arrays' },
          { label: 'Two Sum Problem' }
        ]} 
      />
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white shadow-cozy">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-warmGray-800">Two Sum Problem</h1>
            <p className="text-warmGray-600">Find two numbers in an array that add up to a target value</p>
          </div>
        </div>
        
        {/* Problem Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-lavender-200 text-center">
            <div className="text-2xl font-bold text-green-600">Easy</div>
            <div className="text-sm text-warmGray-600">Difficulty</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-lavender-200 text-center">
            <div className="text-2xl font-bold text-lavender-600">O(n)</div>
            <div className="text-sm text-warmGray-600">Time Complexity</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-lavender-200 text-center">
            <div className="text-2xl font-bold text-pink-600">O(n)</div>
            <div className="text-sm text-warmGray-600">Space Complexity</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-lavender-200 text-center">
            <div className="text-2xl font-bold text-warmGray-600">Hash Map</div>
            <div className="text-sm text-warmGray-600">Approach</div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Problem Statement</h2>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-200">
          <p className="text-warmGray-700 leading-relaxed mb-4">
            Given an array of integers <code className="bg-lavender-100 px-2 py-1 rounded text-sm">nums</code> and an integer <code className="bg-lavender-100 px-2 py-1 rounded text-sm">target</code>, 
            return <em>indices of the two numbers such that they add up to</em> <code className="bg-lavender-100 px-2 py-1 rounded text-sm">target</code>.
          </p>
          <p className="text-warmGray-700 leading-relaxed mb-4">
            You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.
          </p>
          <p className="text-warmGray-700 leading-relaxed">
            You can return the answer in any order.
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Examples</h2>
        <div className="space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-200">
            <h3 className="font-semibold text-warmGray-800 mb-2">Example 1:</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Input:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">nums = [2,7,11,15], target = 9</code></p>
              <p><strong>Output:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">[0,1]</code></p>
              <p><strong>Explanation:</strong> Because <code className="bg-lavender-100 px-2 py-1 rounded">nums[0] + nums[1] == 9</code>, we return <code className="bg-lavender-100 px-2 py-1 rounded">[0, 1]</code>.</p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-200">
            <h3 className="font-semibold text-warmGray-800 mb-2">Example 2:</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Input:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">nums = [3,2,4], target = 6</code></p>
              <p><strong>Output:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">[1,2]</code></p>
              <p><strong>Explanation:</strong> Because <code className="bg-lavender-100 px-2 py-1 rounded">nums[1] + nums[2] == 6</code>, we return <code className="bg-lavender-100 px-2 py-1 rounded">[1, 2]</code>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Approach */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Mathematical Approach</h2>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-200">
          <p className="text-warmGray-700 leading-relaxed mb-4">
            For each element <MathBlock display={false}>x</MathBlock> in the array, we need to find if there exists another element <MathBlock display={false}>y</MathBlock> such that:
          </p>
          <MathBlock display={true}>x + y = \text{target}</MathBlock>
          <p className="text-warmGray-700 leading-relaxed mb-4">
            This can be rewritten as:
          </p>
          <MathBlock display={true}>y = \text{target} - x</MathBlock>
          <p className="text-warmGray-700 leading-relaxed">
            So for each element <MathBlock display={false}>x</MathBlock>, we check if <MathBlock display={false}>\text{target} - x</MathBlock> exists in our hash map.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Solution</h2>
        
        <div className="space-y-6">
          {/* Hash Map Solution */}
          <div>
            <h3 className="text-xl font-semibold text-warmGray-800 mb-3">Hash Map Approach (Optimal)</h3>
            <CodeBlock 
              language="java"
              title="Two Sum - Hash Map Solution"
              filename="TwoSum.java"
            >
{`public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        // Create a hash map to store number -> index mapping
        Map<Integer, Integer> map = new HashMap<>();
        
        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // If complement exists in map, we found our pair
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            
            // Store current number and its index
            map.put(nums[i], i);
        }
        
        // No solution found (though problem guarantees one exists)
        return new int[]{};
    }
}`}
            </CodeBlock>
            
            <div className="mt-4 space-y-3">
              <h4 className="font-semibold text-warmGray-800">How it works:</h4>
              <ol className="list-decimal list-inside space-y-2 text-warmGray-700">
                <li>Create a HashMap to store numbers and their indices</li>
                <li>For each number, calculate the complement (target - current number)</li>
                <li>If complement exists in map, return both indices</li>
                <li>Otherwise, store current number and its index in the map</li>
              </ol>
            </div>
          </div>

          {/* Brute Force Solution */}
          <div>
            <h3 className="text-xl font-semibold text-warmGray-800 mb-3">Brute Force Approach (For Comparison)</h3>
            <CodeBlock 
              language="java"
              title="Two Sum - Brute Force Solution"
              filename="TwoSumBruteForce.java"
            >
{`public class TwoSumBruteForce {
    public int[] twoSum(int[] nums, int target) {
        // Check all possible pairs
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        
        return new int[]{};
    }
}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Complexity Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Complexity Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-200">
            <h3 className="font-semibold text-warmGray-800 mb-3 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-lavender-500" />
              <span>Time Complexity</span>
            </h3>
            <div className="space-y-2">
              <p className="text-warmGray-700"><strong>Hash Map:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">O(n)</code></p>
              <p className="text-warmGray-700"><strong>Brute Force:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">O(n²)</code></p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-lavender-200">
            <h3 className="font-semibold text-warmGray-800 mb-3 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-pink-500" />
              <span>Space Complexity</span>
            </h3>
            <div className="space-y-2">
              <p className="text-warmGray-700"><strong>Hash Map:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">O(n)</code></p>
              <p className="text-warmGray-700"><strong>Brute Force:</strong> <code className="bg-lavender-100 px-2 py-1 rounded">O(1)</code></p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Problems */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Related Problems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-lavender-200 hover:border-lavender-300 transition-colors">
            <h3 className="font-semibold text-warmGray-800 mb-2">Three Sum</h3>
            <p className="text-sm text-warmGray-600">Find all unique triplets that sum to zero</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-lavender-200 hover:border-lavender-300 transition-colors">
            <h3 className="font-semibold text-warmGray-800 mb-2">Two Sum II</h3>
            <p className="text-sm text-warmGray-600">Two Sum with sorted array (two pointers)</p>
          </div>
        </div>
      </section>

      {/* Practice Tips */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-warmGray-800 mb-4">Practice Tips</h2>
        <div className="bg-gradient-to-r from-lavender-50 to-pink-50 rounded-xl p-6 border border-lavender-200">
          <ul className="space-y-2 text-warmGray-700">
            <li>• Always consider edge cases: empty array, single element, no solution</li>
            <li>• Hash maps are your friend for O(1) lookups</li>
            <li>• Remember that you can't use the same element twice</li>
            <li>• The problem guarantees exactly one solution exists</li>
            <li>• Consider what happens if there are duplicate elements</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
